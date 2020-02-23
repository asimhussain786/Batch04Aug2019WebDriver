package testcases;

import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class TestTakigScreenShot {
	public static WebDriver driver;
	
	public static void captureScreenshot() throws IOException {
		
		//save screenshot with Filename Error.jpg in your root project in screenshot folder
		/* 
		  File screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		  FileUtils.copyFile(screenshot, new File("./screenshot/"+Error.jpg));
		*/

		// give filename of the current date and time
		Date d = new Date();
		String fileName = d.toString().replace(":", "_").replace(" ", "_")+".jpg";

		File screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(screenshot, new File("./screenshot/"+fileName));
	
			}
	
	public static void main(String[] args) throws IOException {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.get("https://gmail.com");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		captureScreenshot();
		
}
}
