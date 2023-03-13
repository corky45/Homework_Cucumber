package steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Assert;
import pages.LoginPage;
import pages.TestBase;

public class LoginStepDefinition extends TestBase {
	LoginPage loginPage;

	@Before
	public void beforeRun() {
		initDriver();
		loginPage = PageFactory.initElements(driver, LoginPage.class);
	}

	@Given("User is on the techfios login page")
	public void user_is_on_the_techfios_login_page() {
		driver.get("https://techfios.com/billing/?ng=login/");
	}

	@When("User enters the {string} in the {string} field")
	public void user_enters__in_the_field(String data, String field) {
		if (field.equalsIgnoreCase("Username")) {
			loginPage.enterUserName(data);
			System.out.println("Data:" + data);
		} else if (field.equalsIgnoreCase("Password")) {
			loginPage.enterPassword(data);
		} else {
			System.out.println("Unable to enter data:" + data + "in the field:" + field);
		}

	}

	@And("User clicks on {string}")
	public void user_clicks_on_button(String button) {
		switch (button) {
		case "login":
			loginPage.clickSignInButton();
			break;
		case "bankCash":
			loginPage.clickBankCash();
			break;
		case "newAccount":
			loginPage.createNewAccount();
			break;
		case "submit":
			loginPage.clickSubmitButton();
			break;
		default:
			System.out.println("Unable to click on button" + button);
		}
	}

	@Then("User should land on Dashboard page")
	public void user_should_land_on_dashboard_page() {
		String expectedTitle = "Dashboard- iBilling";
		String actualTitle = loginPage.getPageTitle();
		Assert.assertEquals(expectedTitle, actualTitle);
	}

	@And("User enters {string} in the {string} field in accounts page")
	public void user_enters_in_the_field(String data, String field) {
		switch (field) {
		case "accountTitle":
			loginPage.enterAccountTitle(data);
			break;
		case "description":
			loginPage.enterDescription(data);
			break;
		case "initialBalance":
			loginPage.enterInitialBalance(data);
			break;
		case "accountNumber":
			loginPage.enterAccountNumber(data);
			break;
		case "contactPerson":
			loginPage.enterContactPerson(data);
			break;
		case "phoneNumber":
			loginPage.enterPhoneNumber(data);
			break;
		case "internetBankingURL":
			loginPage.enterInternetBankingURL(data);
			break;
		default:
			System.out.println("Unable to enter" + field);
		}
	}

	@Then("User should be able to validate account created successfully")
	public void user_should_be_able_to_validate() {
		loginPage.takeScreenshot(driver);
		String expectedTitle = "Manage Accounts";
		String actualTitle = loginPage.getPageTitle();
		Assert.assertEquals(expectedTitle, actualTitle);
	}

	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}
}
