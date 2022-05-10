import {Quote} from "../models";
import {QuoteService} from "../quote.service";

export class TreeNode {
  private readonly _quote: Quote | string;
  private readonly _dimensions: number;
  private _children : null | TreeNode[] = [];
  private _sum: number;

  static createRoot(children: TreeNode[], sum: number = 0): TreeNode {
    const node = new TreeNode(null);
    node.setChildren(children);
    node.setSum(sum);
    return node;
  }

  public constructor(quote: null | Quote | string) {
    if (quote !== null && typeof(quote) !== "string") {
      this._quote = quote;
      this._dimensions = quote.cellsTakenUp;
      this._sum = this._dimensions;
    } else {
      this._quote = quote;
    }
  }

  get children() {
    return this._children;
  }

  get sum() {
    return this._sum;
  }

  setSum(sum: number) {
    this._sum = sum;
  }

  addChild(treeNode: TreeNode) {
    if (treeNode !== undefined) {
      this._children.push(treeNode);
    }
  }

  setChildren(treeNodes: TreeNode[]) {
    if (treeNodes !== undefined && treeNodes !== null) {
      this._children = treeNodes;
    }
  }

  get dimensions() {
    return this._dimensions;
  }

  get quote() {
    return this._quote;
  }

  toString(): string {
    //quoteId: ${this?.quote?.id ?? -1},\n
    //     sum: ${this.sum},
    // dimensions: ${this._dimensions},\n
    return `[
    children: ${this._children.toString()}
    ]`;
  }
}

export class QuoteGalleryGreedyAlgorithm {
  constructor() {  }
  solve(totalCellsInGallery: number, root: TreeNode): Quote[] {
    const answer = [];
    const localCopy = root;
    if (root.sum <= totalCellsInGallery) {
      root.children.forEach(child => {
        const children = child.children;
        if (children && children.length > 0) {
          children.forEach(t => answer.push(t.quote));
      }});
      return answer;
    }
    let runningTotal = totalCellsInGallery;
    let delta;
    while(runningTotal > 0) {
      let nodeWithSmallestDelta: TreeNode = null;
      for (const node of root.children) {
        delta = runningTotal - node.sum;
        if (nodeWithSmallestDelta === null || nodeWithSmallestDelta.sum > delta) {
          nodeWithSmallestDelta = node;
        }
      }
      for(const n of nodeWithSmallestDelta.children) {
        if (runningTotal <= 0) {
          break;
        }
        if (n.sum <= runningTotal) {
          answer.push(n.quote);
          runningTotal -= n.sum;
        }
      }
      // remove the total node we just looked through
      localCopy.setChildren(localCopy.children.filter(node => node !== nodeWithSmallestDelta));
    }
    console.log(answer.length);
    return answer;
  }

  validateAnswer(totalCellsInGallery: number, selectedQuotes: Quote[]): [boolean, number] {
    if (totalCellsInGallery === 0 && selectedQuotes.length === 0) {
      return [true, 0];
    }
    if (totalCellsInGallery > 0 && selectedQuotes.length === 0) {
      return [false, 0];
    }
    let sum = 0;
    selectedQuotes.forEach(q => sum += q.cellsTakenUp);
    return [totalCellsInGallery === sum, sum];
  }
}

export function buildQuoteTree(quotes: Quote[]): TreeNode {
  /*
  let totalSum = 0;
  quotes.forEach(q => totalSum += q.cellsTakenUp);
  console.log(totalSum);
  */
  const numQuotes = quotes.length;
  const children = [];
  const TREE_SIZE = 18;
  for (let i = 0; i < numQuotes; i += TREE_SIZE) {
    let sum = 0;
    const quoteSet = quotes.splice(i, TREE_SIZE);
    if (quoteSet.length > 0) {
      quoteSet.forEach(q => sum += q.cellsTakenUp);
      children.push(TreeNode.createRoot(quoteSet.map(q => new TreeNode(q)), sum));
    }
  }
  while(quotes.length > 0) {
    let sum = 0;
    const quoteSet = quotes.splice(0, 18);
    quoteSet.forEach(q => sum += q.cellsTakenUp);
    children.push(TreeNode.createRoot(quoteSet.map(q => new TreeNode(q)), sum));
  }
  let rootSum = 0;
  // const sums = [children.length];
  children.forEach(q => {
    rootSum += q.sum;
    // sums.push(q.sum);
  });
  return TreeNode.createRoot(children, rootSum);
}
