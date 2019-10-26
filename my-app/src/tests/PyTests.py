import pytest
import datetime
import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC

from pymongo import MongoClienti

def findData():
	client = MongoClient("mongodb+srv://linedrivebetting:texaslonghorns@cluster0-w7pi2.mongodb.net/test?retryWrites=true&w=majority")
	db = client.sports_data.nfl_data
	date = 'October 27, 2019, 1:00 PM ET'
	return (db.count_documents({'date': date}))

def test_findData():
	assert findData() >= 0

def getTime():
    	ts = time.time()
    	return datetime.datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S')

def test_getTime():
	ts = time.time()
	assert getTime() == datetime.datetime.utcnow().strftime('%y-%m-%d %H:%M:%S')
