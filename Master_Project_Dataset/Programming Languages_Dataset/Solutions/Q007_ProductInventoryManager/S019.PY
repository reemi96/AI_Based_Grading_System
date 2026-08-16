# Error: Uses a fixed dictionary instead of reading products from the user.
# & WITHOUT PRODUCT SEARCH 
products = {
    "Laptop": 10,
    "Mouse": 25,
    "Keyboard": 15,
    "Monitor": 8,
    "Printer": 12
}

total = sum(products.values())
highest = max(products, key=products.get)

print("Total Quantity:", total)

print("Highest Quantity Product:")
print(highest, ":", products[highest])