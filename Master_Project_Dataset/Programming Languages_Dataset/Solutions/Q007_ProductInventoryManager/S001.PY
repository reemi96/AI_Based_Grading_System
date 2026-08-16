# Correct solution.

products = {}

for i in range(5):
    name = input(f"Enter product {i + 1} name: ")
    quantity = int(input(f"Enter quantity for {name}: "))
    products[name] = quantity

total_quantity = sum(products.values())

highest_product = max(products, key=products.get)

search_product = input("Enter product to search: ")

print("Total Quantity:", total_quantity)

print("Highest Quantity Product:")
print(highest_product, ":", products[highest_product])

print("Search Result:")

if search_product in products:
    print(search_product, ":", products[search_product])
else:
    print("Product not found")