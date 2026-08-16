// Error: Swaps even and odd counting.
// & WITHOUT Largest and smallest calculation

using System;

class Program
{
    static void Main()
    {
        int[] numbers = new int[10];

        for (int i = 0; i < 10; i++)
            numbers[i] = Convert.ToInt32(Console.ReadLine());

        int even = 0;
        int odd = 0;

        foreach (int n in numbers)
        {
            if (n % 2 == 0)
                odd++;
            else
                even++;
        }

        Console.WriteLine("Even Numbers: " + even);
        Console.WriteLine("Odd Numbers: " + odd);
    }
}