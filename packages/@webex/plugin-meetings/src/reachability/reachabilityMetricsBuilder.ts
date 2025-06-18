import {ReachabilityMetrics} from './reachability.types';

/**
 * ReachabilityMetricsBuilder is a class that builds reachability metrics.
 */
export default class ReachabilityMetricsBuilder {
  reachabilityMetrics: ReachabilityMetrics;
  selectedMediaServerIp: string | undefined;

  reachabilityMetricsOutput = {};

  /**
   * Creates an instance of ReachabilityMetricsBuilder.
   *
   * @param {any} metrics - The metrics to be used for building reachability metrics.
   * @param {string | undefined} selectedMediaServerIp - The IP address of the selected media server.
   */
  constructor(metrics: ReachabilityMetrics, selectedMediaServerIp: string | undefined) {
    this.reachabilityMetrics = metrics;
    this.selectedMediaServerIp = selectedMediaServerIp;
  }

  /**
   * Builds reachability metrics.
   *
   * @returns {any} The built reachability metrics.
   */
  build() {
    return this.reachabilityMetrics;
  }
}
