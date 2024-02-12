/**
 * 
 */
package inventoryManagement;

public class inventory {
    private int id;
    private String itemNumber;
    private String itemGroup;
    private String itemName;
    private int quantity;
    private double price;
    private String vendor;
    private String description;
    private String inventoryStatus;
    private int minimumOrder;
    
    public inventory(int id, String itemNumber, int minimumOrder, String itemGroup, String itemName, int quantity, double price, String vendor, String description, String inventoryStatus) {
        this.id = id;
        this.itemNumber = itemNumber;
        this.itemGroup = itemGroup;
        this.itemName = itemName;
        this.quantity = quantity;
        this.price = price;
        this.vendor = vendor;
        this.description = description;
        this.inventoryStatus = inventoryStatus;
        this.minimumOrder = minimumOrder;
    }

    // Getters and setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getItemNumber() {
        return itemNumber;
    }

    public void setItemNumber(String itemNumber) {
        this.itemNumber = itemNumber;
    }

    public String getItemGroup() {
        return itemGroup;
    }

    public void setItemGroup(String itemGroup) {
        this.itemGroup = itemGroup;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getVendor() {
        return vendor;
    }

    public void setVendor(String vendor) {
        this.vendor = vendor;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getInventoryStatus() {
        return inventoryStatus;
    }

    public void setInventoryStatus(String inventoryStatus) {
        this.inventoryStatus = inventoryStatus;
    }

    public int getMinimumOrder() {
        return minimumOrder;
    }

    public void setMinimumOrder(int minimumOrder) {
        this.minimumOrder = minimumOrder;
    }
}