// Error: Uses the smallest number as the largest.
// & without Even/Odd counting

using System;

class Program
{
    static void Main()
    {
        int[] numbers = new int[10];

        for (int i = 0; i < 10; i++)
            numbers[i] = Convert.ToInt32(Console.ReadLine());

        int largest = numbers[0];
        int smallest = numbers[0];

        foreach (int n in numbers)
        {
            if (n < largest)
                largest = n;

            if (n < smallest)
                smallest = n;
        }

        Console.WriteLine("Largest Number: " + largest);
        Console.WriteLine("Smallest Number: " + smallest);
    }
}