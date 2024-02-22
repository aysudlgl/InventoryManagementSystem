package com.example.demo.model;
	import java.sql.Connection;
	import java.sql.DriverManager;
	import java.sql.SQLException;

public class databaseConnector {
	
	public class Database_Connector {
	    private static final String JDBC_URL = "jdbc:mysql://localhost:3306/InventoryManagement";
	    private static final String USERNAME = "root";
	    private static final String PASSWORD = "Selda18112001!";

	    public static Connection connect() throws SQLException {
	        return DriverManager.getConnection(JDBC_URL, USERNAME, PASSWORD);
	    }
	}

	public static Connection connect() {
		// TODO Auto-generated method stub
		return null;
	}
}
