using System;

class Program
{
    static double Calculate(double num1, double num2, char op)
    {
        switch (op)
        {
            case '+':
                return num1 + num2;

            case '-':
                return num1 - num2;

            case '*':
                return num1 * num2;

            case '/':
                return num1 / num2;

            default:
                return double.NaN;
        }
    }

    static void Main()
    {
        Console.Write("Enter first number: ");
        double num1 = Convert.ToDouble(Console.ReadLine());

        Console.Write("Enter second number: ");
        double num2 = Convert.ToDouble(Console.ReadLine());

        Console.Write("Enter operator (+, -, *, /): ");
        char op = Convert.ToChar(Console.ReadLine());

        double result = Calculate(num1, num2, op);

        if (double.IsNaN(result))
        {
            Console.WriteLine("Invalid Operator");
        }
        else
        {
            Console.WriteLine("Result: " + result);
        }
    }
}