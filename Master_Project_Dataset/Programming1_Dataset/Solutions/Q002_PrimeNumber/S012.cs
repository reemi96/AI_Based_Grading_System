// Error: Does not validate numbers less than 2.
// Returns Prime Number for 0 and 1.

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
                break;
            }
        }

        Console.WriteLine(prime ? "Prime Number" : "Not Prime Number");
    }
}
