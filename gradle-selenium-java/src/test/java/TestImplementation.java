import org.junit.*;
import org.openqa.selenium.WebDriver;
import org.openqa.selenuim.WebElement;
import org.openqa.selenium.WebDriverWait;
import org.openqa.selenium.chrome.ChromeDriver;

import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.MatcherAssert.assertThat;

public class TestImplementation {

    private WebDriver driver;

    @BeforeClass
    public static void setupWebdriverChromeDriver() {
        System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "/src/main/resources/chromedriver");
    }

    @Before
    public void setup() {
        driver = new ChromeDriver();
    }

    @After
    public void teardown() {
        if (driver != null) {
            driver.quit();
        }
    }

    @Test
    public void verifyHomeTitle() {
        driver.get("http://localhost:3000/");
        assertThat(driver.getTitle(), containsString("Formulario de Inscripción"));

        WebElement inicioElem = driver.findElement(By.id("Inicio"));
        WebDriverWait wait = new WebDriverWait(driver, 5);
        ait.until(ExpectedConditions.visibilityOf(inicioElem));
    }
}