import datetime
import time

def getTime():
    ts = time.time()
    return datetime.datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S')
