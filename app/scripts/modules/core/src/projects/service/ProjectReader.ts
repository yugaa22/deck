import { API } from 'core/api';
import { IProject, IProjectCluster } from 'core/domain';

export class ProjectReader {
  public static listProjects(): PromiseLike<IProject[]> {
    return API.all('projects').getList();
  }

  public static getProjectConfig(projectName: string): PromiseLike<IProject> {
    return API.one('projects', projectName).get();
  }

  public static getProjectClusters(projectName: string): PromiseLike<IProjectCluster[]> {
    return API.one('projects', projectName).all('clusters').getList();
  }
}
