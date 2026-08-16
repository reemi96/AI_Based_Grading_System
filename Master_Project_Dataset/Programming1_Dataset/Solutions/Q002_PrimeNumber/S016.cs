// Error: Starts checking from 3.
// Misses divisibility by 2.

using System;

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());

        bool prime = true;

        for (int i = 3; i < n; i++)
        {
            if (n % i == 0)
            {
                prime = false;
                break;
            }
        }

        Console.WriteLine(prime ? "Prime Number" : "Not Prime Number");
    }
}
