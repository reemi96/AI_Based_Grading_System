// Error: Uses fixed values instead of reading input from the user.

using System;

class Program
{
    static void Main()
    {
        int[] numbers = { 5, 8, 10, 3, 7, 12, 15, 20, 1, 6 };

        int largest = numbers[0];
        int smallest = numbers[0];
        int even = 0;
        int odd = 0;

        foreach (int n in numbers)
        {
            if (n > largest)
                largest = n;

            if (n < smallest)
                smallest = n;

            if (n % 2 == 0)
                even++;
            else
                odd++;
        }

        Console.WriteLine("Largest Number: " + largest);
        Console.WriteLine("Smallest Number: " + smallest);
        Console.WriteLine("Even Numbers: " + even);
        Console.WriteLine("Odd Numbers: " + odd);
    }
}