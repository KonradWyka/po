program RandomNumbersSort;

uses
  SysUtils;

const
  MAX_NUMBERS = 50;

type
  NumberArray = array[1..MAX_NUMBERS] of Integer;

procedure GenerateRandomNumbers(var numbers: NumberArray);
var
  i: Integer;
begin
  Randomize;
  for i := 1 to MAX_NUMBERS do
    numbers[i] := Random(101);
end;

procedure SortNumbers(var numbers: NumberArray);
var
  i, j, temp: Integer;
begin
  for i := 1 to MAX_NUMBERS - 1 do
    for j := i + 1 to MAX_NUMBERS do
      if numbers[i] > numbers[j] then
      begin
        temp := numbers[i];
        numbers[i] := numbers[j];
        numbers[j] := temp;
      end;
end;

procedure DisplayNumbers(const numbers: NumberArray);
var
  i: Integer;
begin
  writeln('Posortowane liczby:');
  for i := 1 to MAX_NUMBERS do
    writeln('Liczba ', i, ': ', numbers[i]);
end;

var
  randomNumbers: NumberArray;

begin
  GenerateRandomNumbers(randomNumbers);
  SortNumbers(randomNumbers);
  DisplayNumbers(randomNumbers);
end.
