# Read Me First
The following was discovered as part of building this project:

* The original package name '
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
com.inventorytryout2.html' is invalid and this project uses 'com.example.demo' instead.

# Getting Started

### Reference Documentation
For further reference, please consider the following sections:

* [Official Gradle documentation](https://docs.gradle.org)
* [Spring Boot Gradle Plugin Reference Guide](https://docs.spring.io/spring-boot/docs/3.2.2/gradle-plugin/reference/html/)
* [Create an OCI image](https://docs.spring.io/spring-boot/docs/3.2.2/gradle-plugin/reference/html/#build-image)
* [Thymeleaf](https://docs.spring.io/spring-boot/docs/3.2.2/reference/htmlsingle/index.html#web.servlet.spring-mvc.template-engines)
* [Spring Web](https://docs.spring.io/spring-boot/docs/3.2.2/reference/htmlsingle/index.html#web)

### Guides
The following guides illustrate how to use some features concretely:

* [Handling Form Submission](https://spring.io/guides/gs/handling-form-submission/)
* [Building a RESTful Web Service](https://spring.io/guides/gs/rest-service/)
* [Serving Web Content with Spring MVC](https://spring.io/guides/gs/serving-web-content/)
* [Building REST services with Spring](https://spring.io/guides/tutorials/rest/)

### Additional Links
These additional references should also help you:

* [Gradle Build Scans – insights for your project's build](https://scans.gradle.com#gradle)

