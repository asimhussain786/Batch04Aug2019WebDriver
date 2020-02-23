package testcases;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class TestTabsandPopups {

	public static void main(String[] args) {
		WebDriverManager.chromedriver().setup();
		WebDriver driver = new ChromeDriver();
		driver.get("https://www.hdfcbank.com/");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		driver.findElement(By.xpath("/html[1]/body[1]/div[1]/div[2]/a[1]")).click();
		driver.findElement(By.xpath("//*[@id=\"custom-button\"]/button")).click();
		driver.findElement(By.xpath("//*[@id=\"main\"]/div/div[12]/div[3]/div/div/div/div/div[2]/div[2]/div[2]/div[2]/div/div[4]/label/input")).click();
		driver.findElement(By.xpath("//*[@id=\"main\"]/div/div[12]/div[3]/div/div/div/div/div[2]/div[2]/div[2]/div[3]/a[1]")).click();
	}

}
