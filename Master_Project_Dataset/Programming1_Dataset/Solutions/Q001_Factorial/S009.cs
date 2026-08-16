// Calculates the sum of numbers from 1 to n
// instead of calculating factorial.

using System;

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());

        int sum = 0;

        for (int i = 1; i <= n; i++)
        {
            sum += i;
        }

        Console.WriteLine(sum);
    }
}
