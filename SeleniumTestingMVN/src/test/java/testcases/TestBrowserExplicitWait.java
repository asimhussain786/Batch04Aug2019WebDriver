package testcases;

import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.github.bonigarcia.wdm.WebDriverManager;

public class TestBrowserExplicitWait {

public static void main(String[] args) {
		
		WebDriverManager.chromedriver().setup();
		ChromeDriver driver = new ChromeDriver();
		driver.get("http://gmail.com");
		driver.manage().window().maximize();
	
		// ---------------------------  Explicit Wait   ----------------------------------------//
		
		WebDriverWait wait = new WebDriverWait(driver, 5);
		
		
		driver.findElement(By.xpath("//*[@id=\"identifierId\"]")).sendKeys("asm.sbc@googlemail.com");
		driver.findElement(By.xpath("//*[@id=\"identifierNext\"]/span/span")).click();
		
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"password\"]/div[1]/div/div[1]/input"))).sendKeys("ahshdagsjg");

		// -------   or we can use another ExpectedConditions  ---------//
	
		//wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id=\"password\"]/div[1]/div/div[1]/input"))).sendKeys("ahshdagsjg");
		
}
}


