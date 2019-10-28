import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
//comment the above line and uncomment below line to use Chrome
import org.openqa.selenium.chrome.ChromeDriver;
public class myClass {


	public static void main(String[] args) {

		if(checkTitle()) {
			System.out.println("CheckTitle passed");
		}
		else {
			System.out.println("CheckTitle failed");
		}
		
	}

	public static boolean checkTitle() {

		boolean returnVal = false;
		// declaration and instantiation of objects/variables
		System.setProperty("webdriver.firefox.marionette","C:\\geckodriver.exe");
		WebDriver driver = new FirefoxDriver();
		//comment the above 2 lines and uncomment below 2 lines to use Chrome
		//System.setProperty("webdriver.chrome.driver","/usr/local/bin/chromedriver");
		//WebDriver driver = new ChromeDriver();

		String baseUrl = "http://www.linedrivebetting.com";
		String expectedTitle = "React App";
		String actualTitle = "";

		// launch Fire fox and direct it to the Base URL
		driver.get(baseUrl);

		// get the actual value of the title
		actualTitle = driver.getTitle();
		//expectedTitle = driver.getTitle();
		//System.out.println(actualTitle);

		/*
		 * compare the actual title of the page with the expected one and print
		 * the result as "Passed" or "Failed"
		 */
		if (actualTitle.equals(expectedTitle)){
			returnVal = true;
		} else {
			returnVal = false;
		}

		//close Fire fox
		driver.close();
		return returnVal;
	}

}
