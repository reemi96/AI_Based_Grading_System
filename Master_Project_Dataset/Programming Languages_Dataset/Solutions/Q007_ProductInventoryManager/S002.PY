# Error: Total quantity is calculated incorrectly using the number of products.

products = {}

for i in range(5):
    name = input("Product: ")
    quantity = int(input("Quantity: "))
    products[name] = quantity

total = len(products)

highest = max(products, key=products.get)

print("Total Quantity:", total)

print("Highest Quantity Product:")
print(highest, ":", products[highest])

search = input("Search: ")

print("Search Result:")

if search in products:
    print(search, ":", products[search])
else:
    print("Product not found")