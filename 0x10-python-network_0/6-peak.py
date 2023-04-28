#!/bin/python3
"""
function that finds a peak in a list of unsorted integers.
"""


def find_peak(list_of_integers):
    """
    Finds a peak in a list of unsorted integers using recursion.
    """
    n = len(list_of_integers)
    
    # base cases
    if n == 1:
        return list_of_integers[0]
    elif n == 2:
        return max(list_of_integers)
    
    # recursive case
    else:
        mid = n // 2  # get the index of the middle element
        
        # check if the middle element is less than the element to its left
        if list_of_integers[mid] < list_of_integers[mid-1]:
            return find_peak(list_of_integers[:mid])  # search the left half of the list
        
        # check if the middle element is less than the element to its right
        elif list_of_integers[mid] < list_of_integers[mid+1]:
            return find_peak(list_of_integers[mid+1:])  # search the right half of the list
        
        # middle element is greater than its neighbors, so it's a peak
        else:
            return list_of_integers[mid]
