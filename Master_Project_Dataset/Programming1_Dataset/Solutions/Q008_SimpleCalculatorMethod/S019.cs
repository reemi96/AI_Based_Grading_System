// Error: Uses fixed numbers instead of reading input from the user.

using System;

class Program
{
    static double Calculate(double a, double b, char op)
    {
        switch (op)
        {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': return a / b;
            default: return double.NaN;
        }
    }

    static void Main()
    {
        double result = Calculate(10, 5, '+');

        Console.WriteLine("Result: " + result);
    }
}