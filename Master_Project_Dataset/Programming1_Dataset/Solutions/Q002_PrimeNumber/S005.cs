// Error: Does not handle numbers less than 2 correctly.
// It considers 1 as a prime number.

using System;

class Program
{
    static void Main()
    {
        int n = int.Parse(Console.ReadLine());

        bool prime = true;

        for (int i = 2; i < n; i++)
        {
            if (n % i == 0)
                prime = false;
        }

        Console.WriteLine(prime ? "Prime Number" : "Not Prime Number");
    }
}
