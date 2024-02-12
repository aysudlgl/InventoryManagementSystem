package inventoryManagement;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/addItem")
public class AddItemServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        // Get parameters from the request
        String itemNumber = request.getParameter("itemNumber");
        String itemName = request.getParameter("itemName");
        int itemQuantity = Integer.parseInt(request.getParameter("itemQuantity"));
        double itemPrice = Double.parseDouble(request.getParameter("itemPrice"));
        String itemVendor = request.getParameter("itemVendor");
        String itemDescription = request.getParameter("itemDescription");
        String itemInventoryStatus = request.getParameter("itemInventoryStatus");

        // Insert data into the database
        try (Connection connection = DatabaseConnector.connect();
             PreparedStatement preparedStatement = connection.prepareStatement(
                     "INSERT INTO items (itemNumber, itemName, itemQuantity, itemPrice, itemVendor, itemDescription, itemInventoryStatus) VALUES (?, ?, ?, ?, ?, ?, ?)")) {
            preparedStatement.setString(1, itemNumber);
            preparedStatement.setString(2, itemName);
            preparedStatement.setInt(3, itemQuantity);
            preparedStatement.setDouble(4, itemPrice);
            preparedStatement.setString(5, itemVendor);
            preparedStatement.setString(6, itemDescription);
            preparedStatement.setString(7, itemInventoryStatus);
            preparedStatement.executeUpdate();

            // Send a response to the client
            PrintWriter out = response.getWriter();
            out.println("Item added successfully!");
        } catch (SQLException e) {
            e.printStackTrace();
            response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Error adding item to the database");
        }
    }
}
