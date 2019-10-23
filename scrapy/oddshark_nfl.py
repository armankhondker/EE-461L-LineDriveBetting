from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC

from pymongo import MongoClient
from bson.objectid import ObjectId

import time

url = 'https://www.oddsshark.com/nfl/odds'

driver = webdriver.Chrome()
driver.implicitly_wait(10)

client = MongoClient("mongodb+srv://linedrivebetting:texaslonghorns@cluster0-w7pi2.mongodb.net/test?retryWrites=true&w=majority")
db = client.sports_data

driver.get(url)
time.sleep(1)
link_elements = driver.find_elements_by_class_name('full-matchup')
links = []
for link in link_elements:
    links.append(link.get_attribute('href'))

dates = []
for link in links:
    driver.get(link)
    date = driver.find_element_by_class_name('gc-date').text
    dates.append(date)

driver.get(url)
teamdata = driver.find_element_by_xpath("//*[@id='op-content-wrapper']/div[1]/div[1]")
matchups = teamdata.find_elements_by_class_name('op-matchup-wrapper')
scorelines = driver.find_element_by_id("op-results").find_elements_by_class_name('op-item-row-wrapper')
systime = time.gmtime()
for matchup, date, scoreline in zip(matchups, dates, scorelines):
    match_data = matchup.text.split('\n')
    obj = {}

    if len(match_data) < 5:
        match_time = match_data[0]
        team1 = match_data[2]
        team2 = match_data[3]
    else:
        match_time = match_data[0]
        team1 = match_data[4]
        team2 = match_data[5]
    
    score_data = scoreline.text.split('\n')
    j = 0
    if(len(score_data) < 24):
        j = len(score_data)
        if(j == 1):
            score_data[0] = 'not released yet'
        while j < 24:
            score_data.append('not released yet')
            j = j + 1
    match = db.nfl_data.find_one({"date": date, "team1": team1, "team2": team2})
    if match:
        #update
        match['sys_time'].append(systime)
        match['opening_ps_1'].append(score_data[0])
        match['opening_ml_1'].append(score_data[1])
        match['opening_ps_2'].append(score_data[2])
        match['opening_ml_2'].append(score_data[3])
        match['bovada_ps_1'].append(score_data[4])
        match['bovada_ml_1'].append(score_data[5])
        match['bovada_ps_2'].append(score_data[6])
        match['bovada_ml_2'].append(score_data[7])
        match['betonline_ps_1'].append(score_data[8])
        match['betonline_ml_1'].append(score_data[9])
        match['betonline_ps_2'].append(score_data[10])
        match['betonline_ml_2'].append(score_data[11])
        match['intertops_ps_1'].append(score_data[12])
        match['intertops_ml_1'].append(score_data[13])
        match['intertops_ps_2'].append(score_data[14])
        match['intertops_ml_2'].append(score_data[15])
        match['sportsbetting_ps_1'].append(score_data[16])
        match['sportsbetting_ml_1'].append(score_data[17])
        match['sportsbetting_ps_2'].append(score_data[18])
        match['sportsbetting_ml_2'].append(score_data[19])
        match['betnow_ps_1'].append(score_data[20])
        match['betnow_ml_1'].append(score_data[21])
        match['betnow_ps_2'].append(score_data[22])
        match['betnow_ml_2'].append(score_data[23])
        db.nfl_data.replace_one({'_id': match['_id']}, match)
    else:
        #make a new one
        obj['date'] = date
        obj['time'] = match_time
        obj['team1'] = team1
        obj['team2'] = team2
        obj['sys_time'] = [systime]
        obj['opening_ps_1'] = [score_data[0]]
        obj['opening_ml_1'] = [score_data[1]]
        obj['opening_ps_2'] = [score_data[2]]
        obj['opening_ml_2'] = [score_data[3]]
        obj['bovada_ps_1'] = [score_data[4]]
        obj['bovada_ml_1'] = [score_data[5]]
        obj['bovada_ps_2'] = [score_data[6]]
        obj['bovada_ml_2'] = [score_data[7]]
        obj['betonline_ps_1'] = [score_data[8]]
        obj['betonline_ml_1'] = [score_data[9]]
        obj['betonline_ps_2'] = [score_data[10]]
        obj['betonline_ml_2'] = [score_data[11]]
        obj['intertops_ps_1'] = [score_data[12]]
        obj['intertops_ml_1'] = [score_data[13]]
        obj['intertops_ps_2'] = [score_data[14]]
        obj['intertops_ml_2'] = [score_data[15]]
        obj['sportsbetting_ps_1'] = [score_data[16]]
        obj['sportsbetting_ml_1'] = [score_data[17]]
        obj['sportsbetting_ps_2'] = [score_data[18]]
        obj['sportsbetting_ml_2'] = [score_data[19]]
        obj['betnow_ps_1'] = [score_data[20]]
        obj['betnow_ml_1'] = [score_data[21]]
        obj['betnow_ps_2'] = [score_data[22]]
        obj['betnow_ml_2'] = [score_data[23]]
        db.nfl_data.insert_one(obj)

driver.quit()
