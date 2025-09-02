"""positive integer n,
if n =even, n/2 else n*3+1
repeats until n is one
#print line that contains all values of n


 1)n=int(input())
ans=[n]
while n != 1:
  if n % 2 != 0:
     n = n * 3 + 1
  else:
    n = n//2
  ans.append(n)
print(*ans)
"""

"""all numbers between 1 and n
first input integer n
second input n-1
#finding missing numbers
"""
n=int(input())
li=[]
for a in range(n-1):
    li.append(int(input()))
total=n*(n+1)//2
given=sum(li)
print(total-given)

