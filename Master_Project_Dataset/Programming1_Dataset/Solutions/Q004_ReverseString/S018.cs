// Correct solution.
// Builds the reversed string character by character.

using System;

class Program
{
    static void Main()
    {
        string text = Console.ReadLine();

        string reversed = "";

        for (int i = text.Length - 1; i >= 0; i--)
        {
            reversed += text[i];
        }

        Console.WriteLine(reversed);
    }
}
