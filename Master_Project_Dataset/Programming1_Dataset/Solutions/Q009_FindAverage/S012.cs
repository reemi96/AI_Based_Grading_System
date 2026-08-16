// Error: The method returns the largest number instead of the average.

using System;

class Program
{
    static double CalculateAverage(int[] numbers)
    {
        int largest = numbers[0];

        foreach (int n in numbers)
        {
            if (n > largest)
                largest = n;
        }

        return largest;
    }

    static void Main()
    {
        int[] numbers = new int[5];

        for (int i = 0; i < numbers.Length; i++)
            numbers[i] = Convert.ToInt32(Console.ReadLine());

        Console.WriteLine("Average: " + CalculateAverage(numbers));
    }
}