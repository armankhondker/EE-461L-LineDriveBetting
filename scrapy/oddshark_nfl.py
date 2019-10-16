from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC

from pymongo import MongoClient

import time

# //*[@id="op-results"]/div[2]
# //*[@id="op-content-wrapper"]/div[1]/div[1]/div[5]

driver = webdriver.Chrome()
driver.implicitly_wait(10)

driver.get('https://www.oddsshark.com/nfl/odds')
teamdata = driver.find_element_by_xpath("//*[@id='op-content-wrapper']/div[1]/div[1]")
matchups = teamdata.find_elements_by_class_name('op-matchup-wrapper')

upload = []
for matchup in matchups:
    data = matchup.text.split('\n')
    obj = {}
    if len(data) < 5:
        obj['time'] = data[0]
        obj['team1'] = data[2]
        obj['team2'] = data[3]
    else:
        obj['time'] = data[0]
        obj['num1'] = data[1]
        obj['num2'] = data[2]
        obj['team1'] = data[4]
        obj['team2'] = data[5]
    upload.append(obj)

scorelines = driver.find_element_by_id("op-results").find_elements_by_class_name('op-item-row-wrapper')
i = 0
systime = time.gmtime()
#if there is missing data, it might not be saved under the correct website
for scoreline in scorelines:
    data = scoreline.text.split('\n')
    j = 0
    if(len(data) < 24):
        j = len(data)
        if(j == 1):
            data[0] = 'not released yet'
        while j < 24:
            data.append('not released yet')
            j = j + 1
    #query mongoDB to see if game is already recorded
    #if not, do the lines below
    #if it is, make a new function that updates the data
    
    upload[i]['sys_time'] = [systime]
    upload[i]['opening_ps_1'] = [data[0]]
    upload[i]['opening_ml_1'] = [data[1]]
    upload[i]['opening_ps_2'] = [data[2]]
    upload[i]['opening_ml_2'] = [data[3]]
    upload[i]['bovada_ps_1'] = [data[4]]
    upload[i]['bovada_ml_1'] = [data[5]]
    upload[i]['bovada_ps_2'] = [data[6]]
    upload[i]['bovada_ml_2'] = [data[7]]
    upload[i]['betonline_ps_1'] = [data[8]]
    upload[i]['betonline_ml_1'] = [data[9]]
    upload[i]['betonline_ps_2'] = [data[10]]
    upload[i]['betonline_ml_2'] = [data[11]]
    upload[i]['intertops_ps_1'] = [data[12]]
    upload[i]['intertops_ml_1'] = [data[13]]
    upload[i]['intertops_ps_2'] = [data[14]]
    upload[i]['intertops_ml_2'] = [data[15]]
    upload[i]['sportsbetting_ps_1'] = [data[16]]
    upload[i]['sportsbetting_ml_1'] = [data[17]]
    upload[i]['sportsbetting_ps_2'] = [data[18]]
    upload[i]['sportsbetting_ml_2'] = [data[19]]
    upload[i]['betnow_ps_1'] = [data[20]]
    upload[i]['betnow_ml_1'] = [data[21]]
    upload[i]['betnow_ps_2'] = [data[22]]
    upload[i]['betnow_ml_2'] = [data[23]]
    i = i + 1

client = MongoClient("mongodb+srv://linedrivebetting:texaslonghorns@cluster0-w7pi2.mongodb.net/test?retryWrites=true&w=majority")
db = client.sports_data
db.nfl_data.insert_many(upload)

driver.quit()