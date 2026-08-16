// Correct solution.
// Uses a separate function.

using System;

class Program
{
    static string ReverseString(string text)
    {
        char[] chars = text.ToCharArray();
        Array.Reverse(chars);
        return new string(chars);
    }

    static void Main()
    {
        string text = Console.ReadLine();

        Console.WriteLine(ReverseString(text));
    }
}
