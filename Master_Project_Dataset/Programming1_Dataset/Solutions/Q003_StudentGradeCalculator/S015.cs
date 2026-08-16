// Error: Incorrect grade ranges.
// Students with averages between 80 and 89 receive C instead of B.

using System;

class Program
{
    static void Main()
    {
        double g1 = double.Parse(Console.ReadLine());
        double g2 = double.Parse(Console.ReadLine());
        double g3 = double.Parse(Console.ReadLine());

        double average = (g1 + g2 + g3) / 3;

        char grade;

        if (average >= 90)
            grade = 'A';
        else if (average >= 80)
            grade = 'C';
        else if (average >= 70)
            grade = 'B';
        else if (average >= 60)
            grade = 'D';
        else
            grade = 'F';

        Console.WriteLine("Average = " + average);
        Console.WriteLine("Grade = " + grade);
    }
}