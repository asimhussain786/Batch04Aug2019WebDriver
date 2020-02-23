package testcases;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class ScreenShot {
	public static WebDriver driver;

	public static void main(String[] args) throws IOException {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.get("https://gmail.com");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

		((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE), new File("Error.jpg"));
	}
}
