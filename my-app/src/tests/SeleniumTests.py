import time
import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

class PythonOrgSearch(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Firefox()

    def test_search_in_python_org(self):
        driver = self.driver
        driver.get("http://www.linedrivebetting.com")
        time.sleep(3)  
        self.assertIn("React App", driver.title)

    def test_find_NFL_in_page(self):
        driver = self.driver
        driver.get("http://www.linedrivebetting.com")
        elem = driver.find_element_by_xpath("/html/body/div/div/div/div/a[1]/button/img")
        elem.click()
        time.sleep(6)
        next_elem = driver.find_element_by_xpath("//*[@id=\"root\"]/div/a[1]/div")
        next_elem.click()
        #elem.send_keys(Keys.RETURN)
        #assert "No results found." not in driver.page_source
        #assertTrue ("Point Spread" in driver.page_source)
        self.assertIn("Point Spread", driver.page_source) 

    def test_find_NBA_in_page(self):
        driver = self.driver
        driver.get("http://www.linedrivebetting.com")
        elem = driver.find_element_by_xpath("//*[@id=\"root\"]/div/div/div/a[2]/button/img")
        elem.click()
        time.sleep(6)
        next_elem = driver.find_element_by_xpath("//*[@id=\"root\"]/div/a[1]/div")
        next_elem.click()
        #elem.send_keys(Keys.RETURN)
        #assert "No results found." not in driver.page_source
        #assertTrue ("Point Spread" in driver.page_source)
        self.assertIn("Point Spread", driver.page_source)

    def test_find_MLB_in_page(self):
        driver = self.driver
        driver.get("http://www.linedrivebetting.com")
        elem = driver.find_element_by_xpath("//*[@id=\"root\"]/div/div/div/a[3]/button/img")
        elem.click()
        time.sleep(6)
        next_elem = driver.find_element_by_xpath("//*[@id=\"root\"]/div/a[1]/div")
        next_elem.click()
        #elem.send_keys(Keys.RETURN)
        #assert "No results found." not in driver.page_source
        #assertTrue ("Point Spread" in driver.page_source)
        self.assertIn("Point Spread", driver.page_source)

    def test_login(self):
        driver = self.driver
        driver.get("http://www.linedrivebetting.com")
        elem = driver.find_element_by_xpath("//*[@id=\"root\"]/nav/div/a[3]")
        elem.click()
        time.sleep(3)
        username = driver.find_element_by_xpath("/html/body/div[1]/body/form/div[1]/div/input")
        password = driver.find_element_by_xpath("/html/body/div[1]/body/form/div[2]/div/input")
        username.send_keys("rohanvgarg")
        username.send_keys("testing")
        self.assertIn("rohanvgarg", driver.page_source)

    def test_blog(self):
        driver = self.driver
        driver.get("http://www.linedrivebetting.com")
        elem = driver.find_element_by_xpath("/html/body/div[1]/nav/div/a[2]")
        elem.click()
        self.assertIn("<script src=\"/static/js/main.2623e369.chunk.js\"></script>", driver.page_source)

    def test_about(self):
        driver = self.driver
        driver.get("http://www.linedrivebetting.com")
        elem = driver.find_element_by_xpath("/html/body/div[1]/nav/div/a[1]")
        elem.click()
        self.assertIn("Vision", driver.page_source)
	
    def test_search_no_results(self):
        driver = self.driver
        driver.get("http://www.linedrivebetting.com")
        elem = driver.find_element_by_xpath("/html/body/div[1]/nav/div/a[4]")
        elem.click()
        search_query = "vikes"
        search_entry = driver.find_element_by_xpath("/html/body/div[1]/div/form/input")
        search_entry.send_keys(search_query)
        self.assertIn("No results found", driver.page_source)

    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()
