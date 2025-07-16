package sh.ledgehanger;

import com.microsoft.playwright.*;

public class Main {
    public static void main(String[] args) {
        try(Playwright playwright = Playwright.create()) {
            Browser browser = playwright.firefox().launch(new BrowserType.LaunchOptions().setHeadless(false).setSlowMo(500));
            Page page = browser.newPage();
            page.navigate("http://localhost:4200/");
            System.out.println(page.title());
        }
    }
}