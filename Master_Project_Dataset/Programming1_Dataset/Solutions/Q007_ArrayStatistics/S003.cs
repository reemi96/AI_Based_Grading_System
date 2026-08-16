// Error: Calculates only the largest number and ignores the remaining requirements.

using System;

class Program
{
    static void Main()
    {
        int[] numbers = new int[10];

        for (int i = 0; i < 10; i++)
            numbers[i] = Convert.ToInt32(Console.ReadLine());

        int largest = numbers[0];

        foreach (int n in numbers)
        {
            if (n > largest)
                largest = n;
        }

        Console.WriteLine("Largest Number: " + largest);
    }
}