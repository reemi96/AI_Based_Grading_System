using System;

class Program
{
    static int FindMaximum(int[] numbers)
    {
        int max = numbers[0];

        foreach (int number in numbers)
        {
            if (number > max)
                max = number;
        }

        return max;
    }

    static void Main()
    {
        int[] numbers = new int[6];

        for (int i = 0; i < numbers.Length; i++)
            numbers[i] = Convert.ToInt32(Console.ReadLine());

        Console.WriteLine("Largest Number: " + FindMaximum(numbers));
    }
}