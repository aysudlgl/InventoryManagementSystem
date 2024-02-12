package inventoryManagement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Database_Connector {
    private static final String JDBC_URL = "jdbc:mysql://localhost:3306/FirstConnection";
    private static final String USERNAME = "username";
    private static final String PASSWORD = "password";

    public static Connection connect() throws SQLException {
        return DriverManager.getConnection(JDBC_URL, USERNAME, PASSWORD);
    }
}