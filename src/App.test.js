const { declareTypeAlias } = require('@babel/types')
const App = require('./App')

test("email entry", () => {
    const adminUser = {
        email: "admin@admin.com",
        password: "admin"
    }

    App.Login(adminUser);
    expect(App.user.email).toBe("admin@admin.com");
});

test("password entry", () => {
    const adminUser = {
        email: "admin@admin.com",
        password: "admin"
    }

    App.Login(adminUser);
    expect(App.user.password).toBe("admin");
});

test("logout account info clearing", () => {
    const adminUser = {
        email: "admin@admin.com",
        password: "admin"
    }

    App.Login(adminUser);
    App.Logout();
    expect(App.user.name).toBe("");
    expect(App.user.email).toBe("");
});

test("incorrect email login error", () => {
    const incorrectEmail = {
        email: "incorrect@admin.com",
        password: "admin"
    }

    App.Login(incorrectEmail);
    expect(App.error).toBe("Details do not match!");
});

test("incorrect password login error", () => {
    const incorrectPassword = {
        email: "admin@admin.com",
        password: "password"
    }
    
    App.Login(incorrectPassword);
    expect(App.error).toBe("Details do not match!");
});

test("logout error clearing", () => {
    const adminUser = {
        email: "admin@admin.com",
        password: "admin"
    }

    App.Login(adminUser);
    App.Logout();
    expect(App.error).toBe("");
});
