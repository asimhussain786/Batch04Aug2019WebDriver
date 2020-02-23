package testcases;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class JavaScriptExecutor {

	public static void main(String[] args) {
		WebDriverManager.chromedriver().setup();
		WebDriver driver = new ChromeDriver();
		driver.get("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_submit_get");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		//-------------  Switch to Frame then click   ------------------//
		driver.switchTo().frame("iframeResult");
		//driver.findElement(By.xpath("/html/body/button")).click();
		
		//excuting java script to perform the task with out actually clicking it 
		((JavascriptExecutor)driver).executeScript("myFunction()");
		
		//executing your own java script
		((JavascriptExecutor)driver).executeScript("arguments[0].style.border='3px solid red'", driver.findElement(By.id("mySubmit")));
	}
}
