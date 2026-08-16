// Error: Uses assignment instead of comparison logic.
// Always prints Prime Number.

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
            {
                prime = false;
            }
        }

        prime = true;

        Console.WriteLine(prime ? "Prime Number" : "Not Prime Number");
    }
}
