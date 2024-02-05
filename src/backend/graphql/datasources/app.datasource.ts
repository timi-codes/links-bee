import { AppContext } from "../../server";
import config from '../../config';


class AppDataSource  {
  context: AppContext;
  base_url: string

  constructor(options) {
    this.context = options.context;
    this.base_url = "http://localhost:4000"
  }
}
export default AppDataSource;
