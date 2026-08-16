// Error: The Calculate method ignores the operator.
// It always performs addition.

using System;

class Program
{
    static double Calculate(double a, double b, char op)
    {
        return a + b;
    }

    static void Main()
    {
        double a = Convert.ToDouble(Console.ReadLine());
        double b = Convert.ToDouble(Console.ReadLine());
        char op = Convert.ToChar(Console.ReadLine());

        Console.WriteLine("Result: " + Calculate(a, b, op));
    }
}