// Correct solution.
// Uses recursion.

using System;

class Program
{
    static string Reverse(string text)
    {
        if (text.Length <= 1)
            return text;

        return Reverse(text.Substring(1)) + text[0];
    }

    static void Main()
    {
        string text = Console.ReadLine();

        Console.WriteLine(Reverse(text));
    }
}
