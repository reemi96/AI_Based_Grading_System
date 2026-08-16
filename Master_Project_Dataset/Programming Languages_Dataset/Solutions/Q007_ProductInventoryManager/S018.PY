# Error: Stores only product names and ignores quantities.
# DOES NOT USE DICTIONARY & DOES NOT CALCULATE TOTAL AND HIGHEST

products = []

for i in range(5):
    name = input("Product: ")
    quantity = int(input("Quantity: "))
    products.append(name)

print("Total Quantity:", 0)

print("Highest Quantity Product:")
print("Not calculated")

search = input("Search: ")

print("Search Result:")

if search in products:
    print(search)
else:
    print("Product not found")