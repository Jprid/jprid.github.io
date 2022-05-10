import {TreeNode} from "./binary-search-tree";
import {Quote} from "../models";
const inputs = [
  'A DOG',
  'A CAT',
  'ABACUS',
  'DOG',
  'CAT'
];


/*
method:
  group by character at index in string.
    [0] -> A
      'A DOG'
      'A CAT'
      'ABACUS'
      [1] -> \s
        ' DOG'
        ' CAT'
      [1] -> B
        'BACUS'
    [0] -> D
      'DOG'
    [0] -> C
      'CAT'


ROOT:
->A
  -> \s
    -> D
      -> O
        -> G
    -> C
      -> A
        -> T
  -> B
    -> A
      -> C
        -> U
          -> S
->D
->C
 */


export function buildQuoteTrie() {//quotes: Quote[]) {
  const root = new TreeNode(null);
  for (const i of inputs) {
    let nodeIndex = root;
    if (root.children.length === 0) {
      for (const char of i) {
        nodeIndex.addChild(new TreeNode(char));
        nodeIndex = nodeIndex.children[nodeIndex.children.length - 1];
      }
      nodeIndex.addChild(new TreeNode('END'));
    } else {
      let sameCharacterNode = nodeIndex.children.find(node => i[0] === node.quote);
      let next = sameCharacterNode;
      let prev = sameCharacterNode;
      let index = 1;
      while (next !== undefined && index < i.length) {
        if (index > 1) {
          prev = next;
        }
        next = next.children.find(node => i[index++] === node.quote);
      }
      if (next === undefined && index > 1) {
        while (index < i.length) {
          if (next === undefined) {
            prev.addChild(new TreeNode(i[index++]));
            next = prev.children[prev.children.length - 1];
            continue;
          }
          prev = next;
          next.addChild(new TreeNode(i[index++]));
          next = next.children[next.children.length - 1];
        }
      }
      if (index === i.length && next.quote !== 'END') {
        next.addChild(new TreeNode('END'));
      }
    }
  }
  console.log(root);
}
