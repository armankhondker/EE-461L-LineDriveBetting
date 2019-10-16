from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC

from pymongo import MongoClient

client = MongoClient("mongodb+srv://linedrivebetting:texaslonghorns@cluster0-w7pi2.mongodb.net/test?retryWrites=true&w=majority")
db = client.sports_data.nfl_data
num1 = '251'
num2 = '253'
print(db.collection.count_documents({'num1': num1, 'num2': num2}))
