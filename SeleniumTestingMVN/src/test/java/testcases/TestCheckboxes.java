package testcases;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class TestCheckboxes {
	public static String browser = "firefox";
	public static WebDriver driver;
	
	public static void main (String[] args) throws InterruptedException {
		
	if(browser.equals("firefox")){
		WebDriverManager.firefoxdriver().setup();
		driver = new FirefoxDriver();
	} else if (browser.equals("chrome")) {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		}
		
	driver.get("http://www.tizag.com/htmlT/htmlcheckboxes.php");
	driver.manage().window().maximize();
	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS );
		
	// Check the check box the after 5 Seconds Un-check it
	driver.findElement(By.xpath("/html/body/table[3]/tbody/tr[1]/td[2]/table/tbody/tr/td/div[4]/input[1]")).click();
	Thread.sleep(5000);
	driver.findElement(By.xpath("/html/body/table[3]/tbody/tr[1]/td[2]/table/tbody/tr/td/div[4]/input[1]")).click();
	
	System.out.println(driver.findElements(By.name("sports")).size());
	
	// if more than 1 check box list select the just particular block  
	
	WebElement block = driver.findElement(By.xpath("/html/body/table[3]/tbody/tr[1]/td[2]/table/tbody/tr/td/div[4]"));
		
	List<WebElement> checkboxes = block.findElements(By.name("sports"));
	
	System.out.println("Total Checkboxes in a block are: " + checkboxes.size());
	
	// to check all the check boxes in a block
	for (WebElement checkbox : checkboxes ) {
	checkbox.click();
	}
	}
}
