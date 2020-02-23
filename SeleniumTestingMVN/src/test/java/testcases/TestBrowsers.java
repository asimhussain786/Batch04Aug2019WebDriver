package testcases;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.firefox.FirefoxDriver;

public class TestBrowsers {
	
		public static void main(String[] args) {
			
			FirefoxDriver driver = new FirefoxDriver();
			driver.get("http://google.co.uk");
			driver.manage().window().maximize();
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			System.out.println(driver.getTitle());
			System.out.println(driver.getTitle().length());
			
		}
}
