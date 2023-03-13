package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;

public class LoginPage {
	WebDriver driver;

	public LoginPage(WebDriver driver) {
		this.driver = driver;
	}

	// Element Library
	@FindBy(how = How.XPATH, using = "//*[@id=\"username\"]")
	WebElement UserName;
	@FindBy(how = How.XPATH, using = "//*[@id=\"password\"]")
	WebElement Password;
	@FindBy(how = How.XPATH, using = "//button[@name='login']")
	WebElement SignInButton;
	@FindBy(how = How.XPATH, using = "//*[@id=\"side-menu\"]/li[10]/a")
	WebElement BankCash;
	@FindBy(how = How.XPATH, using = "/html/body/section/div/nav/div/ul/li[10]/ul/li[1]/a")
	WebElement NewAccount;
	@FindBy(how = How.XPATH, using = "//*[@id=\"account\"]")
	WebElement AccountTitle;
	@FindBy(how = How.XPATH, using = "//*[@id=\"description\"]")
	WebElement Description;
	@FindBy(how = How.XPATH, using = "//*[@id=\"balance\"]")
	WebElement InitialBalance;
	@FindBy(how = How.XPATH, using = "//*[@id=\"account_number\"]")
	WebElement AccountNumber;
	@FindBy(how = How.XPATH, using = "//*[@id=\"contact_person\"]")
	WebElement ContactPerson;
	@FindBy(how = How.XPATH, using = "//*[@id=\"contact_phone\"]")
	WebElement PhoneNumber;
	@FindBy(how = How.XPATH, using = "//*[@id=\"ib_url\"]")
	WebElement InternetBankingURL;
	@FindBy(how = How.XPATH, using = "//*[@id=\"page-wrapper\"]/div[3]/div[1]/div/div/div[2]/form/button")
	WebElement SubmitButton;

	// Methods to interact with the elements
	public void enterUserName(String userName) {
		UserName.sendKeys(userName);
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	public void enterPassword(String password) {
		Password.sendKeys(password);
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	public void clickSignInButton() {
		SignInButton.click();
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	public String getPageTitle() {
		return driver.getTitle();
	}

	public void clickBankCash() {
		BankCash.click();

	}

	public void createNewAccount() {
		NewAccount.click();
	}

	public void enterAccountTitle(String accountTitle) {
		AccountTitle.sendKeys(accountTitle);
	}

	public void enterDescription(String accountdescription) {
		Description.sendKeys(accountdescription);
	}

	public void enterInitialBalance(String initialbalance) {
		InitialBalance.sendKeys(initialbalance);
	}

	public void enterAccountNumber(String accountnumber) {
		AccountNumber.sendKeys(accountnumber);
	}

	public void enterContactPerson(String contactperson) {
		ContactPerson.sendKeys(contactperson);
	}

	public void enterPhoneNumber(String phonenumber) {
		PhoneNumber.sendKeys(phonenumber);
	}

	public void enterInternetBankingURL(String bankurl) {
		InternetBankingURL.sendKeys(bankurl);
	}

	public void clickSubmitButton() {
		SubmitButton.click();
	}

	public void takeScreenshot(WebDriver driver) {

	}
}
